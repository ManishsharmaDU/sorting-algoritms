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

void bubble_sort(int arr[], int size){
    bool swapped;
    do
    {
        swapped = false;
        for (int i = 0; i < size-1; i++)
        {
            if (arr[i]>arr[i+1])
            {
                swap(arr[i],arr[i+1]);
                swapped = true;
            }
        }
    } while (swapped);
}

int main(){

    int arr[] = {2,15,6,12,7,1,56,5};

    int size = sizeof(arr)/sizeof(arr[0]);
    cout<<"Array before bubble sort"<<endl;
    print(arr,size);
    cout<<"Array after bubble sort"<<endl;
    bubble_sort(arr, size);
    print(arr, size);

    return 0;
}