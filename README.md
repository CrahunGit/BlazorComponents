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
![skeleton table demo](https://github.com/crahungit/BlazorComponents/blob/master/table.gif?raw=true)

## Skeleton cards
```html
<SkeletonCards IsLoading="isLoading"></SkeletonCards>
```
![skeleton cards demo](https://github.com/crahungit/BlazorComponents/blob/master/cards.gif?raw=true)
