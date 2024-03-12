#include<iostream>
using namespace std;

void print(int arr[],int size){
    for (int i = 0; i < size; i++)
    {
       cout<<arr[i]<<endl;
    }
}

void swap(int* a, int*b){
    int temp = *a;
    *a =*b;
    *b = temp;
}

void selection_sort(int arr[], int size){
    for (int i = 0; i < size-1; i++)
    {
        for (int j = i+1; j < size; j++)
        {
            if (arr[i]>arr[j])
            {
                swap(arr[i],arr[j]);
            }
        }
    }
}


int main(){

    int arr[] = {2,15,6,12,7,1,56,5};
    int size = sizeof(arr)/sizeof(arr[0]);
    cout<<"Array before selection sort"<<endl;
    print(arr,size);

    selection_sort(arr,size);

    cout<<"Array after selection sort"<<endl;
    print(arr,size);

    return 0;
}