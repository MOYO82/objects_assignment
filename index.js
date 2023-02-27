
//1.	Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.


function InstagramPost(author, content, post, views, likes) {
    this.author = author;
    this.content = content;
    this.post = post;
    this.views = views;
    this.likes = likes;
  }
     

//2. Create 2 Instagram post objects from the constructor function you created above

const Instagram1 = new InstagramPost('motunrayosholola', 'mushroom recipes', 'picture', '550', '500')
  
console.log(Instagram1)

   OR

const instagram = new Object();
instagram.author = 'motunrayosholola';
instagram.content = 'mushroom recipes';
instagram.post = 'picture';
instagram.views = '550';
instagram.likes = '500';
   
console.log(instagram);


//3.	Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. 
//Recently, he wrote the JAMB exam and had the following scores in his combination:
	ENG - 70
	GOVT - 85
	LIT - 82
	CRK - 94
//a.	Using the factory method, implement a createPerson() factory function that takes name, age and location 
//as arguments. Afterwards, create an object representing Musa from the factory function. 

  function createPerson(name, age, nationality, gender, address) {
    return {
      name: name,
      age: age,
      nationality: nationality,
      gender: gender,
      location: location
    }
  }
      
  const musaInfo = createPerson('Musa Dawodu', '19 years', 'Nigerian', 'male', 'Lekki Lagos State');
      
  console.log(musaInfo)


//b.	Also, implement a factory function createJambScores () that takes eng, govt, lit, crk as arguments. 
//Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
    
  function createJambScores(eng, govt, lit, crk)  {
    return{
      eng: eng, 
      govt: govt, 
      lit: lit,
      crk: crk
    }
  }
    
  const JambScores = createJambScores(70, 85, 82, 94)
  console.log(JambScores)

// 4.	What are the different ways you can clone an object? Give examples for each of them.
  //   There are three ways to clone an objesct an object
  // Asnwer:     (1) Spread ...
  const evenNumbers = [2, 4, 6, 8, 10, 12, 20];
  const combinedNumbers = [1, 3, 5, 7, 9, 11, 19, ...evenNumbers];
  console.log(evenNumbers)

  const myName= ['My', 'name', 'is', 'Motunrayo']
  console.log(...myName)
      
  // (2) Object.assign {}
  const car = {
    brand: 'Toyota',
    model: 'SUV',
    color: 'red',
  }
      
  const myChoiceCar =Object.assign(car);
  console.log(car)
  
  // (3)JSON () (JSON.parse, JSON.stringify)
  let Tcar = {
    brand: 'Toyota',
    model: 'SUV',
    color: 'red',
  }
  console.log({Tcar})

//5.	As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:
//const presidentialCandidates = {
//   AAC: 'Omoyele Sowore',
//   ACCORD: 'Christopher Imumolen',
//   APC: 'Bola Ahmed Tinubu',
//   LP: 'Peter Obi',
//   NNPP: 'Rabiu Kwankwaso',
//   PDP: 'Atiku Abubakar',
// }
//Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
	//’Omoyele Sowore is the presidential candidate of AAC’

  const accPresidentialCandidate = {
    AAC: 'Omoyele Sowore',
  }
  const accordPresidentialCandidate = {
  ACCORD: 'Christopher Imumolen',
  }
  const apcPresidentialCandidate = {
    APC: 'Bola Ahmed Tinubu',
  }
  const lpPresidentialCandidate = {
    LP: 'Peter Obi',
  }
  const nnppPresidentialCandidate = {
    NNPP: 'Rabiu Kwankwaso',
  }
  const pdpPresidentialCandidate = {
    PDP: 'Atiku Abubakar',
  }
  
  for(const ACC in accPresidentialCandidate) {
  console.log(accPresidentialCandidate[ACC] + ' is the presidential candidate of AAC');
  }
  
  for(const ACCORD in accordPresidentialCandidate) {
  console.log(accordPresidentialCandidate[ACCORD] + ' is the presidential candidate of ACCORD');
  
  }
  
  for(const APC in apcPresidentialCandidate) {
  console.log(apcPresidentialCandidate[APC] + ' is the presidential candidate of APC');
  
  }
  
  for(const LP in lpPresidentialCandidate) {
  console.log(lpPresidentialCandidate[LP] + ' is the presidential candidate of LP');
  
  }
  
  for(const NNPP in nnppPresidentialCandidate) {
  console.log(nnppPresidentialCandidate[NNPP] + ' is the presidential candidate of NNPP');
    
  }
  
  for(const PDP in pdpPresidentialCandidate) {
  console.log(pdpPresidentialCandidate[PDP] + ' is the presidential candidate of PDP');
  
  }
  