export interface IBook {
    id: string;
    volumeInfo: volumeInfo;


}
interface volumeInfo {
    authors: Array<string>
    categories: Array<string>;
    imageLinks: imageLinks;
    title: string

}
interface imageLinks{
    smallThumbnail: string;

}