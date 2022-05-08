interface PhoneNumberDictionary {
    [phone: string]: {
      num: number;
    };
};
  
interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
};
  
enum PhoneType {
    Home = 'home', 
    Office = 'office',
    Studio = 'studio',
};

// 개별 또는 묶어서 export 
export { Contact, PhoneType };