const quotesWrapper = document.getElementById("quotes");
const addQuoteWrapper = document.getElementById("add-quote");
const addQuoteBtn = document.getElementById("add-new-quote");
const newQuoteBtn = document.getElementById("new-quote");
const newQuoteBtn2 = document.getElementById("new-quote-2");
const submitQuoteBtn = document.getElementById("submit-quote");
const textbox = document.getElementById("add-quote-text");
const authorElem = document.getElementById("quote-author");
const formError = document.getElementById("form-error");
let tempQuotesArray, tempImagesArray, currentQuoteIndex, currentImageIndex;
const quotesArray = [
	{
		 quote: "Always bet on Javascript", author: "Brendan Eich" 
	},
	
	{
		 quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" 
	},
	
	{
		 quote: "The greatest glory in living lies not in never falling, but in rising every time we fall", author: "Nelson Mandela" 
	},
	
	{
		 quote: "Peace begins with a smile", author: "Mother Teresa" 
	},
	
	{
		 quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" 
	},
	
	{
		quote: "There's nothing more permanent than a temporary hack",
		author: "Kyle Simpson"
	},
	{
		quote: "It does not matter how slowly you go, so long as you do not stop.",
		author: "Confucius"
	},
	{
		quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
		author: "Benjamin Franklin"
	},
	{
		quote: "The future belongs to those who believe in the beauty of their dreams. ",
		author: "Eleanor Roosevelt"
	},
	{
		quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
		author: "Robert Louis Stevenson"
	},
	{
		quote:
			"Things work out best for those who make the best of how things work out.",
		author: "John Wooden"
	},
	{
		quote:
			"If you are not willing to risk the usual, you will have to settle for the ordinary.",
		author: "Jim Rohn"
	},
	{
		quote:
			"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
		author: "Mother Teresa"
	},
	{
		quote:
			"When you reach the end of your rope, tie a knot in it and hang on.",
		author: "Franklin D. Roosevelt"
	},
	{
		quote:
			"Always remember that you are absolutely unique. Just like everyone else.",
		author: "Margaret Mead"
	},
	{
		quote:
			"If life were predictable it would cease to be life, and be without flavor.",
		author: "Eleanor Roosevelt"
	},
	{
		quote:
			"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
		author: "Oprah Winfrey"
	},
	{
		quote:
			"Success is most often achieved by those who don't know that failure is inevitable",
		author: "Coco Chanel"
	},
	{
		quote:
			"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
		author: "Steve Jobs"
	},
	{
		quote:
			"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
		author: "Albert Einstein"
	},
	{
		quote: `Technology is nothing. What's important is that you have a faith in people, that they're basicaally good and 
    smart, and that if you give them tools, they'll do wonderful things with them.`,
		author: "Steve Jobs"
	},
	{
		quote: "Life is what happens when you're busy making other plans.",
		author: "John Lennon"
	},
	{
		quote: `Take up one idea. Make that one idea your life -- think of it, dream of it, live on that idea. Let the brain,
    muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. 
    This is the way to success`,
		author: "Swami Vivekananda"
	}
];

const imagesArray = [
	{
		imageURL:
			"https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		credit: "Photo by Bailey Zindel on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		credit: "Photo by pinewatt on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		credit: "Photo by Pietro De Grandi on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1504292341394-5c8444920887?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b07c518227ba466a4b7fcab9c9454322&auto=format&fit=crop&w=750&q=80",
		credit: "Photo by Daniela Cuevas on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
		credit: "Photo by Silas Baisch on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1513&q=80",
		credit: "Photo by Vincentiu Solomon on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
		credit: "Photo by Ales Krivec on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
		credit: "Photo by Luca Micheli on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1523978591478-c753949ff840?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		credit: "Photo by Pascal Debrunner on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/37/IHLjdHdzSvi0rgUMMlSK_TE3_0286.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1634&q=80",
		credit: "Photo by Fottest Cavale on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1444930694458-01babf71870c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1563&q=80",
		credit: "Photo by Corina Ardeleanu on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1543348750-466b55f32f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
		credit: "Photo by Nick Perez on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
		credit: "Photo by Marita Kavelashvili on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		credit: "Photo by Cristina Gottardi on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
		credit: "Photo by Damian Patkowski on Unsplash"
	},
	{
		imageURL:
			"https://images.unsplash.com/photo-1495710388177-22c73fa5f84e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
		credit: "Photo by Etienne Delorieux on Unsplash"
	}
];

document.body.onload = getNewQuote();

addQuoteBtn.onclick = function() {
	if (!textbox.value.trim()) {
		// reinitialize form if textbox contains no value
		reintializeForm();
	}

	// show add quotes form and hide quotes view
	addQuoteWrapper.classList.remove("hide");
	quotesWrapper.classList.add("hide");
};

newQuoteBtn.onclick = getNewQuote;

newQuoteBtn2.onclick = getNewQuote;

textbox.onfocus = function() {
	// get the baseScrollHeight
	this.baseScrollHeight = getBaseScrollHeight(textbox);

	// reinitialize textbox border color and hide error incase of former errors
	this.style.borderColor = "white";
	formError.classList.add("hide");
};

textbox.oninput = function() {
	// calculate rows as (currentScrollHeight - baseScrollHeight) / Math.ceil(font-size * line-height)
	this.rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 25);
};

submitQuoteBtn.onclick = function() {
	const quote = textbox.value.trim();

	// if no author is provided, make author Anonymous
	const author = !authorElem.value.trim() ? "Anonymous" : authorElem.value;

	if (!quote) {
		// show form error if empty textbox was submitted
		formError.classList.remove("hide");
		textbox.style.borderColor = "red";
	} else {
		// submit quote and reinitialize form
		const quoteObject = { author, quote };
		submitQuote(quoteObject);
		reintializeForm();
	}
};

/**
 * Calculates scroll height of input element when it is empty
 * @param {DOM Element} textbox
 * @returns {number} baseScrollHeight
 */
function getBaseScrollHeight(textbox) {
	// store textbox value in temp variable savedValue
	let savedValue = textbox.value;
	// empty texbox and calculate height of textbox
	textbox.value = "";
	let baseScrollHeight = textbox.scrollHeight;
	// return value to textbox
	textbox.value = savedValue;
	return baseScrollHeight;
}

/**
 * Gets Random Object
 * @param {array} arr - array to get object from
 * @param {array} temp - temp array
 * @returns {object} newQuote
 */
function getRandomObject(arr, temp) {
	// copy array of objects to temp array if temp is undefined or empty
	if (temp === undefined || temp.length === 0) {
		temp = Array.from(arr);
	}

	// generate object at random index in temp array
	const index = Math.floor(Math.random() * temp.length);
	const obj = temp[index];
	// remove object from temp array to avoid repetitive values
	temp.splice(index, 1);

	return { obj, temp };
}

/**
 * Gets New Quote
 * @returns {nothing} - returns nothing
 */
function getNewQuote() {
	const quoteObject = getRandomObject(quotesArray, tempQuotesArray);
	const imageObject = getRandomObject(imagesArray, tempImagesArray);

	tempQuotesArray = quoteObject.temp;
	tempImagesArray = imageObject.temp;
	updateElements(quoteObject.obj, imageObject.obj);
}

/**
 * Reinitailizes Form
 * @returns {nothing} - returns nothing
 */
function reintializeForm() {
	textbox.rows = 2;
	textbox.value = "";
	authorElem.value = "";
	formError.classList.add("hide");
	textbox.style.borderColor = "white";
	textbox.placeholder = "Quote";
}

/**
 * Updates DOM Elements
 * @param {object} quoteObject - quote object
 * @param {object} imageObject - image object
 * @returns {nothing} - returns nothing
 */
function updateElements(quoteObject, imageObject) {
	addQuoteWrapper.classList.add("hide");
	quotesWrapper.classList.remove("hide");
	// update DOM elements to reflect selected quotes object
	document
		.getElementById("text")
		.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
	document
		.getElementById("author-wrapper")
		.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000 });
	document.getElementById("text").textContent = quoteObject.quote;
	document.getElementById("author").textContent = quoteObject.author;
	document.getElementById("photo-credit").textContent = imageObject.credit;
	document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
		imageObject.imageURL
	})`;
}

/**
 * Submits Quote
 * @param {object} quoteObj - quote object
 * @returns {nothing} returns nothing
 */
function submitQuote(quoteObj) {
	// push quote object to quotes array
	quotesArray.push(quoteObj);

	// generate new random image and update DOM
	const imageObject = getRandomObject(imagesArray, tempImagesArray);
	tempImagesArray = imageObject.temp;

	updateElements(quoteObj, imageObject.obj);
}
