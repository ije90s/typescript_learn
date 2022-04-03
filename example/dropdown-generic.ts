//이메일 인터페이스 선언
interface Email {
  value: string; 
  selected: boolean; 
}

const emails: Email[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

//상품번호 인터페이스 선언
interface productNumber {
  value: number; 
  selected: boolean;
};

const numberOfProducts: productNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

//유니온 타입으로 인자값 지정
function createDropdownItem(item: Email | productNumber ) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});

// 유니온 타입으로 지정했기 때문에 numberOfProducts도 오류 X
numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});