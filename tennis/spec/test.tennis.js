
function Tennis(){
  this.point_player1 =0 ;
  this.point_player2 =0 ;


  this.count_point = function(Whois){


    if(Whois === 'p1'){
        if(this.point_player1 === 0 && this.point_player2 === 0)
            this.point_player1 +=15

      }



    if(this.point_player1 === 0 && this.point_player2 === 0)
        return "love - love";
    else if(this.point_player1 === 15 && this.point_player2 === 0)
        return "fifteen - love";

  }
}




describe("count-point", function() {

    var tennis = new Tennis()

    it('should "Love - Love"', function() {
      expect(tennis.count_point()).toBe("love - love")
    });

    it('should "fifteen - Love"', function() {


      expect(tennis.count_point('p1')).toBe("fifteen - love")

    });




});
