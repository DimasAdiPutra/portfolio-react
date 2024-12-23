import Button from './Button'

const Contact = () => {
	return (
		<section
			id="contact"
			className="px-4 min-h-screen w-full flex flex-col pt-40 md:pt-0 lg:px-10 lg:pt-40 xl:min-h-fit items-center md:justify-center max-w-screen-xl">
			<h1 className="text-heading-h2 text-center mb-10 max-w-72  md:mb-20 xl:max-w-none">
				Hubungi saya!
			</h1>
			<form
				action=""
				className="w-full min-w-80 mx-auto p-6 max-w-screen-xl flex flex-col">
				{/* Input Nama */}
				<div className="mb-4">
					<label htmlFor="name" className="block text-sm text-body-base mb-1">
						Nama
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Masukkan nama Anda"
						className="text-body-small w-full p-2 border bg-transparent border-second rounded-md focus:ring-2 focus:ring-black focus:outline-none"
						required
					/>
				</div>

				{/* Input Email */}
				<div className="mb-4">
					<label htmlFor="email" className="block text-sm text-body-base mb-1">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Masukkan email Anda"
						className="text-body-small w-full p-2 border bg-transparent border-second rounded-md focus:ring-2 focus:ring-black focus:outline-none"
						required
					/>
				</div>

				{/* Input Pesan */}
				<div className="mb-4">
					<label
						htmlFor="message"
						className="block text-sm text-body-base mb-1">
						Pesan
					</label>
					<textarea
						id="message"
						name="message"
						placeholder="Masukkan pesan Anda"
						rows="4"
						className="text-body-small w-full p-2 border bg-transparent border-second rounded-md focus:ring-2 focus:ring-black focus:outline-none"
						required></textarea>
				</div>

				{/* Tombol Submit */}
				<Button text="Kirim" className="w-full md:w-max self-end" />
			</form>
		</section>
	)
}

export default Contact
