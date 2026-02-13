export interface LatestOrdersProps{
    id:string
    userLogo:string
    name:string
    status:string
    price:string
    date:string
    theme: 'light' | 'dark' ;
}



export interface LatestOrdersTableProps {
    orders: LatestOrdersProps[] | [];
    theme: 'light' | 'dark' ;
}
