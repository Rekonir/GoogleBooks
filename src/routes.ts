import MainPage from "./pages/MainPage/MainPage";

export const publicRoutes = [
    {
        path: '/',
        Component: MainPage,
        breadcrumb: 'Главная'
    },
    {
        path: '/:id',
        Component: MainPage,
        breadcrumb: 'Страница книги'
    }
]