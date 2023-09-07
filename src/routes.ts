import BookPage from "./pages/BookPage/BookPage";
import MainPage from "./pages/MainPage/MainPage";

export const publicRoutes = [
    {
        path: '/',
        Component: MainPage,
        breadcrumb: 'Главная'
    },
    {
        path: '/:id',
        Component: BookPage,
        breadcrumb: 'Страница книги'
    }
]