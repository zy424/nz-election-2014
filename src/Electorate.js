class Electorate {
	constructor (newElectorateName, theElection) {
    this.name = newElectorateName
	  this.electorateVotes = []
	  this.theElection = theElection
	  this.MP = ''
		this.winParty = undefined
  }	
	addWinner (winner, winParty) {
		this.MP = winner
		this.winParty = winParty
		var theParty = this.theElection.findParty(this.winParty)
		if(theParty){
		  var theCandidate = theParty.findCandidate(this.MP)
			
		  if (theCandidate) {
			  theCandidate.setElectorate(this)
		  } else {
				theParty.addingElecorateMP(this.MP,this)
			}
		} else {
			this.theElection.addIndenpendent(this.MP)
		}
	}	
	addPartyVotes (...allPartyVotes) {
		for (let aPartyVote of allPartyVotes) {
			this.electorateVotes.push (aPartyVote)
		}
	  return this.electorateVotes
	}
	toString () {
		return this.name + View.TAB() + 'The winning MP: ' + '(' + this.MP + ', ' + this.winParty + ')'
	}	
}


