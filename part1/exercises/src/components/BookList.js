export default function BookList() {
   let pageTitle = "Books I Read This Month";
   let book1 = "https://m.media-amazon.com/images/I/715anDaCOvL._AC_UL800_FMwebp_QL65_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/91+AC9AYVWL._AC_UL800_FMwebp_QL65_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/91afIYwE9BL._AC_UL800_FMwebp_QL65_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Out Of Nowhere by Sandra Brown" />
         <img src={book2} alt="The Edge by David Baldacci" />
         <img src={book3} alt="The Exchange by John Grisham" />
      </div>      
   );
}