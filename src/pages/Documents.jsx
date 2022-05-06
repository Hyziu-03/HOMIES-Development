import Menu from "../comps/Menu";
import MockImage from "../comps/MockImage";
import SearchBar from "../comps/SearchBar";
import BackIcon from "../svg/BackIcon";

const Documents = () => {
  return (
    <section className="documents">
        <BackIcon />
        <h1 className="documents-heading">Młoda Polska</h1>
        <SearchBar />

        <section className="documents-container">
            <section className="item">
            <MockImage size='155/110' class='documents-image'/>
            <section className="item-info">
                <span className="item-name">Kanon lektur - notatka</span>
                <span className="tag">do 10 minut</span>
                <span className="tag">notatka</span>    
            </section>
            </section>
            <section className="item">
            <MockImage size='155/110' class='documents-image'/>
            <section className="item-info">
                <span className="item-name">Kanon lektur - notatka</span>
                <span className="tag">do 10 minut</span>
                <span className="tag">notatka</span>    
            </section>
            </section>
            <section className="item">
            <MockImage size='155/110' class='documents-image'/>
            <section className="item-info">
                <span className="item-name">Kanon lektur - notatka</span>
                <span className="tag">do 10 minut</span>
                <span className="tag">notatka</span>    
            </section>
            </section>
        </section>

        <Menu />
    </section>
  );
}

export default Documents;
