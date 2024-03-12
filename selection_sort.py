def swap(x, y):
    temp = x
    x = y
    y = temp
    return x, y

def selection_sort(arr):
    size = len(arr)
    for i in range(size - 1):
        min_index = i
        for j in range(i + 1, size):
            if arr[j] < arr[min_index]:
                min_index = j
        arr[i], arr[min_index] = swap(arr[i], arr[min_index])

def main():
    arr = [64, 25, 12, 22, 11]

    print("Original array:", arr)

    selection_sort(arr)

    print("Sorted array:", arr)

if __name__ == "__main__":
    main()
