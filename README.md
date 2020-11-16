# BlazorComponents
Useful blazor components

## Skeleton table component
```html
<SkeletonTable NumberOfColumns="4" IsLoading="isLoading">
    <ChildContent>
        <tr>
            <td>
                Value1
            </td>
            <td>
                Value2
            </td>
        </tr>
    </ChildContent>
    <Head>
        <tr>
            <th>
                Column1
            </th>
            <th>
                Column2
            </th>
        </tr>
    </Head>
</SkeletonTable>
```


## Skeleton cards
```html
<SkeletonCards IsLoading="isLoading"></SkeletonCards>
```
