#ifndef __CONST_H__
#define __CONST_H__
#include <cstdio>
#include <cstring>

#define SCHEME_CNT 5

typedef struct Paths
{
    int path[10][5];
    int maxWeight[5];

    int cnt;
} Paths;

void assignToArray( int * arr, int v1, int v2, int v3, int v4, int v5 );

int init( Paths paths[8]);

#endif
