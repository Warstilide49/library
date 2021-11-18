my_library=[];

buttons=[];
delete_btns=[];
all_cards=[];

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
	all_cards.push(card);
	card.classList.add('card');
	for(property in book){
		if(property=="read"){
			button=document.createElement('button');
			card.appendChild(button);
			button.textContent=(book[property]===true) ? "Mark Incomplete" : "Mark Complete";
			if (book[property]===true)
				card.classList.add('read');
			buttons.push(button);
			fix_listener();
			/*button.addEventListener('click',()=>{
				if(book[property]===false){
					card.classList.add('read');
					button.textContent="Mark Incomplete";
					book[property]=true;
				}
				else{
					card.classList.remove('read');
					button.textContent="Mark Complete";
					book[property]=false;
				}
			});*/
			
		}
		else{
			element=document.createElement('div');
			element.classList.add(property);
			element.textContent=`${book[property]}`;
			card.appendChild(element);
		}
		
	}
	delete_btn=document.createElement('button');
	card.appendChild(delete_btn);
	delete_btn.textContent="Delete";
	delete_btns.push(delete_btn);

	delete_btns.forEach((btn)=>{
		btn.addEventListener('click',delete_card);
	})

	card_holder.appendChild(card);


	form_title.value='';
	form_author.value='';
	form_pages.value='';
}

function fix_listener(){
	buttons.forEach((btn)=>{
		btn.addEventListener('click',button_purpose);
	});
}

function button_purpose(event){
	if(my_library[buttons.indexOf(event.target)][property]==false){
		all_cards[buttons.indexOf(event.target)].classList.add('read');
		event.target.textContent="Mark Incomplete";
		my_library[buttons.indexOf(event.target)][property]=true;
	}
	else{
		all_cards[buttons.indexOf(event.target)].classList.remove('read');
		event.target.textContent="Mark Complete";
		my_library[buttons.indexOf(event.target)][property]=false;
	}
}

function delete_card(event){
	required_index=delete_btns.indexOf(event.target);
	all_cards[required_index].remove();
	all_cards.splice(required_index,1);
	buttons.splice(required_index,1);
	my_library.splice(required_index,1);
	delete_btns.splice(required_index,1);
}
