class Election {
  constructor (newYear) {
    this.year = newYear
    this.totalVotes = 0
    this.allMyParties = []
	  this.allMyElecorates = []
    this.partyVotes = []
  }
  addParty (newName) {
	  let newParty = new Party(newName, this)
	  this.allMyParties.push(newParty)
	  return newParty
  }
	findParty (partyName) {
			return this.allMyParties.find(aParty => aParty.name === partyName)
	}
	addElectorate (newName) {
	  let newElectorate = new Electorate(newName, this)
	  this.allMyElecorates.push(newElectorate)
	  return newElectorate
  }
	addIndependent (candidateName){
		
	}
  set (...numbers) {
    this.partyVotes = numbers
  }
  /*calcPartyVotes () {
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    for (let anElectorate of this.allMyElecorates) {
      for (let i = 0; i < anElectorate.electorateVotes.length; i++) {
        this.partyVotes[i] += anElectorate.electorateVotes[i]
      }
    }
    for (let i = 0; i < this.allMyParties.length; i++) {
      this.allMyParties[i].votes = this.partyVotes[i]
    }
  }*/
  getParties () {
    let result1 = ''
    //this.calcPartyVotes()
    for (let aParty of this.allMyParties) {
      result1 += View.TAB() + aParty + View.NEWLINE()
  	}
   	return result1
  }
  getElectorates () {
    let result2 = ''
	  for (let anElectorate of this.allMyElecorates) {
    result2 += View.TAB() + anElectorate + View.NEWLINE()
    }
    return result2
  }
  getCandidates () {
    let result4 = ''
    for (let aParty of this.allMyParties) {
      let result3 = ''
      for (let aCandidate of aParty.allMyListCandidates) {
				result3 += View.TAB() + aCandidate + View.NEWLINE()
		  }
      result4 += View.TAB() + aParty.name + View.NEWLINE() + result3 + View.NEWLINE()
    }
    return result4
  }
  getAll () {
    let result = 'Election ' + this + View.NEWLINE()
    result += '*PARTIES*' + View.NEWLINE()
    result += this.getParties() + View.NEWLINE()
    result += '**ELECTORATES**' + View.NEWLINE()
    result += this.getElectorates() + View.NEWLINE()
    result += '***PARTY LISTS***' + View.NEWLINE()
    result += this.getCandidates() + View.NEWLINE()
    return result
  }
}


	
	  
	




