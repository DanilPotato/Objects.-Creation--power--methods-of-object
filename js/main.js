// 1

const bankAccount = {
	ownerName: 'Danil',
	accountNumber: '4135',
	balance: 0,
	deposit: function (sum) {
		this.balance += sum
		updateBalance()
	},
	withdraw: function (sum) {
		if (this.balance >= sum) {
			this.balance -= sum
		} else {
			alert('Недостатньо коштів на рахунку')
		}
		updateBalance()
	},
}

function updateBalance() {
	const showBalance = document.getElementById('showBalance')
	showBalance.textContent = `Баланс: ${bankAccount.balance} гривень`
}

document.getElementById('replenish').addEventListener('click', function () {
	bankAccount.deposit(100)
})

document.getElementById('withdraw').addEventListener('click', function () {
	bankAccount.withdraw(100)
})

updateBalance()

// 2

const weather = {
	temperature: 0,
	humidity: 50,
	windSpeed: 10,
	thermometer: function () {
		if (this.temperature < 0) {
			return 'температура нижче 0 градусів Цельсія'
		} else {
			return 'температура вище 0 градусів Цельсія'
		}
	},
}

document
	.getElementById('checkTemperature')
	.addEventListener('click', function () {
		const inputTemperature = document.getElementById('inputTemperature').value
		weather.temperature = parseFloat(inputTemperature)
		const resultMessage = weather.thermometer()
		document.getElementById('result').textContent = resultMessage
	})

// 3

const user = {
	name: 'Danil',
	email: 'poshta@gmail.com',
	password: '12345',
	login: function (inputEmail, inputPassword) {
		if (inputEmail === this.email && inputPassword === this.password) {
			alert('Login successful')
		} else {
			alert('Invalid email or password')
		}
	},
}

const inputEmail = document.getElementById('inputEmail')
const inputPassword = document.getElementById('inputPassword')

document.getElementById('loginButton').addEventListener('click', function () {
	const emailValue = inputEmail.value
	const passwordValue = inputPassword.value
	user.login(emailValue, passwordValue)
})

// 4

const movie = {
	title: 'Inception',
	director: 'Christopher Nolan',
	year: 2010,
	rating: 8.8,
	isHighRated: function (userRating) {
		return userRating > 8
	},
}

function displayMovieDetails() {
	const movieDetailsDiv = document.getElementById('movieDetails')

	const titleElement = document.createElement('p')
	titleElement.textContent = `Title: ${movie.title}`

	const directorElement = document.createElement('p')
	directorElement.textContent = `Director: ${movie.director}`

	const yearElement = document.createElement('p')
	yearElement.textContent = `Year: ${movie.year}`

	const ratingElement = document.createElement('p')
	ratingElement.textContent = `Rating: ${movie.rating}`

	movieDetailsDiv.appendChild(titleElement)
	movieDetailsDiv.appendChild(directorElement)
	movieDetailsDiv.appendChild(yearElement)
	movieDetailsDiv.appendChild(ratingElement)
}

function checkUserRating() {
	const userRating = parseFloat(document.getElementById('userRating').value)
	const resultElement = document.getElementById('ratingResult')

	if (isNaN(userRating)) {
		resultElement.textContent = 'Пожалуйста, введите числовое значение.'
	} else {
		const isHighRated = movie.isHighRated(userRating)
		resultElement.textContent = `Результат: ${isHighRated}`

		if (isHighRated) {
			resultElement.classList.add('green')
		} else {
			resultElement.classList.remove('green')
		}
	}
}

displayMovieDetails()

document
	.getElementById('checkRating')
	.addEventListener('click', checkUserRating)
