Array.prototype.myForEach = function (func) {
  for (var i = 0; i < this.lenght; i++) {
    func(this[i])
  }
}

var friends = ['charlie', 'jenny', 'maddy', 'dave']

friends.myForEach(alert)
