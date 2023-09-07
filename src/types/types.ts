export interface IBook {
    id: string;
    volumeInfo: volumeInfo;


}
interface volumeInfo {
    authors: Array<string>
    categories: Array<string>;
    imageLinks: imageLinks;
    title: string;
    description: string

}
interface imageLinks{
    smallThumbnail: string;

}
export interface IDefaultState{
    category: string;
    sort:string
}