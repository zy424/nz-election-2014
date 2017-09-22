class Candidate {
	constructor (newName, newPosition, aParty) {
    this.name = newName
	  this.listPerson = newPosition
	  this.myParty = aParty
		this.myElectorate = undefined
  }
	setElectorate (anElectorate){
		this.myElectorate = anElectorate.name
	}
	toString () {
		let result = this.name + View.SPACE() + '('+ 'ListPosition:' + View.SPACE() + this.listPerson + ')' + View.SPACE() 
		             + (this.myElectorate ? '(Electorate:' + View.SPACE() + this.myElectorate +')' : '')
		return result
	}
}