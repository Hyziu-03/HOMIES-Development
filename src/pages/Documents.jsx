import Menu from '../comps/Menu';
import Document from '../comps/Document';
import SearchBar from '../comps/SearchBar';
import BackIcon from '../svg/BackIcon';

const Documents = () => {
	return (
		<section className='documents'>
				<BackIcon />
				<h1 className='documents-heading'>Młoda Polska</h1>
				<SearchBar />
				<section className='documents-container'>
						<Document name='Materiał 1' tags='notatka, do 10 minut'/>
						<Document name='Materiał 2' tags='artykuł, do 20 minut'/>
						<Document name='Materiał 3' tags='podkast, do 60 minut'/>
						<Document name='Materiał 4' tags='podkast, do 90 minut'/>
						<Document name='Materiał 5' tags='notatka, do 30 minut'/>
						<Document name='Materiał 6' tags='film, do 180 minut'/>
						<Document name='Materiał 7' tags='serial, do 360 minut'/>
				</section>
				<Menu />
		</section>
	);
}

export default Documents;
