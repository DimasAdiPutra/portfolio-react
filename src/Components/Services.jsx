import CardServices from './CardServices'

// import icons
import WebDesignIcon from '../assets/web-design.svg'
import SearchIcon from '../assets/search.svg'
import MobileIcon from '../assets/mobile.svg'
import MoneyIcon from '../assets/money.svg'

const Services = () => {
	return (
		<section className="px-4 min-h-screen flex flex-col pt-10 lg:px-10 xl:min-h-fit lg:pt-40 items-center md:justify-center max-w-screen-2xl">
			<h1 className="text-heading-h2 text-center mb-10 max-w-72 md:mb-20 xl:max-w-none">
				Kenapa bekerjasama dengan saya?
			</h1>
			<div className="flex flex-col items-center gap-8 md:flex-row md:flex-wrap md:justify-center md:items-stretch">
				<CardServices
					srcImg={WebDesignIcon}
					altImg="Web Design Icon"
					cardTitle="Attractive design"
					cardBody="Setiap bisnis atau individu memiliki kebutuhan unik, dan saya memastikan setiap website yang saya buat disesuaikan dengan tujuan, brand, dan audiens Anda."
				/>
				<CardServices
					srcImg={SearchIcon}
					altImg="Search Icon"
					cardTitle="SEO Optimization"
					cardBody="Website yang saya buat dirancang dengan praktik SEO terbaik agar mudah ditemukan di mesin pencari seperti Google."
				/>
				<CardServices
					srcImg={MobileIcon}
					altImg="Mobile Icon"
					cardTitle="Responsive Design"
					cardBody="Di era digital ini, kebanyakan pengunjung mengakses website melalui perangkat mobile. Saya memastikan website Anda tampil optimal di semua perangkat, baik desktop, tablet, maupun smartphone."
				/>
				<CardServices
					srcImg={MoneyIcon}
					altImg="Money Icon"
					cardTitle="Affordable Prices"
					cardBody="Saya menawarkan paket yang fleksibel dengan harga yang sesuai dengan kebutuhan dan anggaran Anda, tanpa biaya tersembunyi."
				/>
			</div>
		</section>
	)
}

export default Services
