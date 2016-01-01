#include <cstdio>
#include <cstdlib>
#include <cmath>

#include "Const.h"

int ans[250]={-1};

int printSchemeWeights( int arr[] )
{
    for ( int i=0;i<SCHEME_CNT;++i )   
        printf("%d ", arr[i]);
    printf ("\n");
}

int getScheme(int cur[],int sum[])
{
    double maxSim = 1.0*cur[0]/sum[0];
    int ans = 0;
    for ( int i=1;i<SCHEME_CNT;++i )
    {
        if ( maxSim < 1.0*cur[i]/sum[i] )
        {
            maxSim = 1.0*cur[i]/sum[i];
            ans = i;
        }
    }
    return ans;
}

int fillAns( int cur[], int mask[], int sum[] )
{
    int score = 0;
    for ( int i=0;i<SCHEME_CNT;++i )
    {
        score += cur[i]+mask[i];
    }
    ans[score] = getScheme(cur, sum);
    //printf("%d %d\n", score, ans[score]);
}

void dfs( int c, int cnt, int cur[], Paths paths[], int mask[], int sum[] )
{
    if ( c==cnt )
    {
        fillAns(cur,mask,sum);
        return;
    }
    for ( int i=0;i<paths[c].cnt;++i )
    {
        for ( int j=0;j<SCHEME_CNT;++j  )
        {
            cur[j] += paths[c].path[i][j];
            dfs(c+1,cnt,cur,paths,mask,sum);
            cur[j] -= paths[c].path[i][j];
        }
    }
}

int main () {
    Paths paths[8];
    int cnt = init ( paths );
    int sumWeight[5]={0};
    for ( int i=0;i<cnt;++i )
    {
        printf ( "%d\n", i );
        for ( int j=0;j<SCHEME_CNT;++j )
        {
            sumWeight[j] += paths[i].maxWeight[j];
        }
    }
    int maskWeight[5]={0};
    for ( int i=SCHEME_CNT-2;i>=0;--i )
        maskWeight[i] = maskWeight[i+1] + sumWeight[i+1];
    printSchemeWeights( sumWeight );
    printSchemeWeights( maskWeight );
    int cur[5] = {0};
    dfs( 0,cnt,cur,paths, maskWeight, sumWeight );
    for ( int i=0;i<250;++i )
    {
        if ( ans[i]!=-1 )
        {
            printf("%d %d\n", i, ans[i]);
        }
    }

}
