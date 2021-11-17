my_library=[];

submitter=document.querySelector('button');
submitter.addEventListener('click',add_book_to_library);

form_title=document.getElementById('title');
form_author=document.getElementById('author');
form_pages=document.getElementById('pages');
form_read=document.getElementById('read');

card_holder=document.getElementById('card_holder');

function Book(title,author,pages,read){
	this.title=title;
	this.author=author;
	this.pages=pages;
	this.read=read;
}

function add_book_to_library(){
	if (!(form_title.value && form_author.value && form_pages.value))
		return;
	let book=new Book(form_title.value,form_author.value,form_pages.value,form_read.checked);
	my_library.push(book);
	card=document.createElement('div');
	card.classList.add('card');
	for(property in book){
		if(property=="read"){
			button=document.createElement('button')
			card.appendChild(button);
			button.textContent="Mark Complete";
			if(book[property]===true){
				card.classList.add('read');
				button.textContent="Mark Incomplete";
			}
		}
		else{
			element=document.createElement('div');
			element.classList.add(property);
			element.textContent=`${book[property]}`;
			card.appendChild(element);
		}
		
	}
	card_holder.appendChild(card);
	form_title.value='';
	form_author.value='';
	form_pages.value='';
}
