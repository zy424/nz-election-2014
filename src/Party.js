class Party {
	constructor (newPartyName, theElection) {
    this.name = newPartyName
	  this.votes = 0
	  this.theElection = theElection
	  this.allMyCandidates = []
	  this.allMyListCandidates = []
	  this.allMyElectorateMPs = []
	}
	addListCandidates (...allCandidateNames) {
		let listPosition= 1
		for (let aName of allCandidateNames) {
			let newCandidate= new Candidate (aName, listPosition, this)
			listPosition += 1
			this.allMyCandidates.push (newCandidate)
			this.allMyListCandidates.push (newCandidate)
		}
	  //return newCandidate
  }
	findCandidate(candidateName) {
		this.allMyElectorateMPs.push(candidateName)
		/*for (let aCandidate of this.allMyCandidates){
			if (aCandidate.name === candidateName){
				return aCandidate
			}
		}*/
		return this.allMyCandidates.find(aCandidate => aCandidate.name === candidateName)
	}
	addingElecorateMP (candidateName) {
		
	}
	toString () {
		return this.name + View.SPACE() + '(Votes:' + this.votes + ')'
	}
}


