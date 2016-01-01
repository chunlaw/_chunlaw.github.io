#include <cstdio>
#include <cstring>
#include "Const.h"

void assignToArray( int * arr, int v1, int v2, int v3, int v4, int v5 )
{
    arr[0]=v1;arr[1]=v2;arr[2]=v3;arr[3]=v4;arr[4]=v5;
}

int init( Paths paths[8])
{
    memset(paths, 0, sizeof (paths));
    // 2a
    assignToArray(paths[0].path[0],8,8,0,0,0);
    assignToArray(paths[0].path[1],0,0,8,4,4);
    // 2b
    assignToArray(paths[1].path[0],8,8,0,4,4);
    assignToArray(paths[1].path[1],0,0,8,2,0);
    // 2c
    assignToArray(paths[2].path[0],0,0,8,2,0);
    assignToArray(paths[2].path[1],8,0,0,0,0);
    // 3b
    assignToArray(paths[3].path[0],4,4,2,2,2);
    assignToArray(paths[3].path[1],4,4,8,6,8);
    assignToArray(paths[3].path[2],0,8,4,8,8);
    // 3c
    assignToArray(paths[3].path[0],2,2,4,4,4);
    assignToArray(paths[3].path[1],8,2,6,6,6);
    assignToArray(paths[3].path[2],4,8,6,8,8);
    assignToArray(paths[3].path[3],2,6,2,2,2);
    // 4a
    assignToArray(paths[4].path[0],8,8,0,0,8); // remark discuss with yat
    assignToArray(paths[4].path[1],0,0,8,2,0);
    assignToArray(paths[4].path[2],0,0,4,4,0);
    assignToArray(paths[4].path[3],0,0,2,6,0);
    assignToArray(paths[4].path[4],0,0,2,8,0);
    // 4b
    assignToArray(paths[5].path[0],8,8,4,2,8);
    assignToArray(paths[5].path[1],0,0,4,6,2);
    // 5
    assignToArray(paths[6].path[0],8,2,2,2,2);
    assignToArray(paths[6].path[1],4,8,8,8,8);

    int n = 7;
    int ter[] = {0,0,0,0,0};
    for ( int i=0;i<n;++i )
    {
        int j;
        for ( j=0;memcmp(ter, paths[i].path[j], sizeof (ter) ); ++j );
        paths[i].cnt = j;
        for ( int k=0;k<j;++k )
        {
            for ( int l=0;l<SCHEME_CNT;++l )
            {
                if ( paths[i].path[k][l] > paths[i].maxWeight[l] ) 
                {
                    paths[i].maxWeight[l] = paths[i].path[k][l];
                }
            }
        }
    }
    return 7;
}
