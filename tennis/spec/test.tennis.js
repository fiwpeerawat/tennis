
function Tennis(){
  this.point_player1 =0 ;
  this.point_player2 =0 ;


  this.put_point = function(Whois){

    if(Whois == 'p1'){
        if(this.point_player1 === 0 )
            this.point_player1 +=15
        else if(this.point_player1 === 15 )
            this.point_player1 +=15
        else if(this.point_player1 === 30 )
            this.point_player1 +=10

      }

       if(Whois == 'p2'){
          if(this.point_player2 === 0 )
              this.point_player2 +=15
          else if(this.point_player2 === 15 )
              this.point_player2 +=15
          else if(this.point_player2 === 30 )
              this.point_player2 +=10

        }

}


  this.count_point = function(){



  }
}




describe("count-point", function() {


    it('should "Love - Love"', function() {

      var tennis = new Tennis()
      expect(tennis.count_point()).toBe("love - love")
    });

    it('should "fifteen - Love"', function() {

      var tennis = new Tennis()

      tennis.put_point('p1')
      expect(tennis.count_point()).toBe("fifteen - love")
    });





});
