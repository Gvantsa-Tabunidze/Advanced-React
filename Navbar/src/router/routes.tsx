export interface IRoute {
    path:string,
    label:string
}

export const routes:IRoute[] = [
    {path: '/', label: 'Home'},
    {path: '/about', label: 'About'},
    {path: '/contacts', label: 'Contacts'},
    {path: '/users', label: 'Users'}
]