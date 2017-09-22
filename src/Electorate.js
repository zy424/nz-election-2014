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
		this.electorateVotes = new Map ()
		let totalVotes = allPartyVotes
		let voteParties = this.theElection.allMyParties
		for (let i =0; i < 16; i++) {
			this.electorateVotes.set(voteParties[i], totalVotes[i])
		}
		for(let aParty of voteParties) {
			aParty.votes += this.electorateVotes.get(aParty)
		}
	}
	toString () {
		return this.name + View.TAB() + 'The winning MP: ' + '(' + this.MP + ', ' + this.winParty + ')'
	}	
}


