
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
        else if(this.point_player1 === 40 )
                this.point_player1 =99//set for check A win

      }

       if(Whois == 'p2'){
          if(this.point_player2 === 0 )
              this.point_player2 +=15
          else if(this.point_player2 === 15 )
              this.point_player2 +=15
          else if(this.point_player2 === 30 )
              this.point_player2 +=10
          else if(this.point_player2 === 40 )
              this.point_player2 =99//set for check B win

        }

}


  this.count_point = function(){

    var get_point_1 = "love";
    var get_point_2 = "love";

    if(this.point_player1 === 99) return "Player A won"
    if(this.point_player2 === 99) return "Player B won"

    if(this.point_player1 === 15)  get_point_1 = "fifteen"
    if(this.point_player2 === 15)  get_point_2 = "fifteen"

    if(this.point_player1 === 30)  get_point_1 = "thirty"
    if(this.point_player2 === 30)  get_point_2 = "thirty"

    if(this.point_player1 === 40)  get_point_1 = "fourty"
    if(this.point_player2 === 40)  get_point_2 = "fourty"

    return get_point_1+" - "+get_point_2



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


        it('should "thirty - Love"', function() {

         var tennis = new Tennis()

          tennis.put_point('p1')
          tennis.put_point('p1')
          expect(tennis.count_point()).toBe("thirty - love")
        });

        it('should "fourty - Love"', function() {

       var tennis = new Tennis()

       tennis.put_point('p1')
       tennis.put_point('p1')
       tennis.put_point('p1')

       expect(tennis.count_point()).toBe("fourty - love")
     });

     it('should "love - fifteen"', function() {

        var tennis = new Tennis()

        tennis.put_point('p2')

        expect(tennis.count_point()).toBe("love - fifteen")
      });

      it('should "love - thirty"', function() {

      var tennis = new Tennis()

      tennis.put_point('p2')
      tennis.put_point('p2')

      expect(tennis.count_point()).toBe("love - thirty")
    });

    it('should "love - fourty"', function() {

          var tennis = new Tennis()

          tennis.put_point('p2')
          tennis.put_point('p2')
          tennis.put_point('p2')

          expect(tennis.count_point()).toBe("love - fourty")
        });

        it('should "fifteen - fifteen"', function() {

              var tennis = new Tennis()

              tennis.put_point('p1')
              tennis.put_point('p2')


              expect(tennis.count_point()).toBe("fifteen - fifteen")
        });

        it('should "fifteen - thirty"', function() {

              var tennis = new Tennis()

              tennis.put_point('p1')
              tennis.put_point('p2')
              tennis.put_point('p2')

              expect(tennis.count_point()).toBe("fifteen - thirty")
          });

      it('should "fifteen - fourty"', function() {

          var tennis = new Tennis()

          tennis.put_point('p1')
          tennis.put_point('p2')
          tennis.put_point('p2')
          tennis.put_point('p2')
          expect(tennis.count_point()).toBe("fifteen - fourty")
        });

        it('should "thirty - fifteen"', function() {

           var tennis = new Tennis()

           tennis.put_point('p1')
           tennis.put_point('p1')
           tennis.put_point('p2')

           expect(tennis.count_point()).toBe("thirty - fifteen")
         });

         it('should "thirty - thirty"', function() {

            var tennis = new Tennis()

            tennis.put_point('p1')
            tennis.put_point('p1')
            tennis.put_point('p2')
            tennis.put_point('p2')

            expect(tennis.count_point()).toBe("thirty - thirty")
          });

          it('should "thirty - fourty"', function() {

            var tennis = new Tennis()

            tennis.put_point('p1')
            tennis.put_point('p1')
            tennis.put_point('p2')
            tennis.put_point('p2')
            tennis.put_point('p2')

            expect(tennis.count_point()).toBe("thirty - fourty")
          });

          it('should "fourty - fifteen"', function() {

            var tennis = new Tennis()

            tennis.put_point('p1')
            tennis.put_point('p1')
            tennis.put_point('p1')
            tennis.put_point('p2')


            expect(tennis.count_point()).toBe("fourty - fifteen")
          });

          it('should "fourty - thirty"', function() {

            var tennis = new Tennis()

            tennis.put_point('p1')
            tennis.put_point('p1')
            tennis.put_point('p1')
            tennis.put_point('p2')
            tennis.put_point('p2')

            expect(tennis.count_point()).toBe("fourty - thirty")
          });

          it('should "fourty - fourty"', function() {

                var tennis = new Tennis()

                tennis.put_point('p1')
                tennis.put_point('p1')
                tennis.put_point('p1')
                tennis.put_point('p2')
                tennis.put_point('p2')
                tennis.put_point('p2')

                expect(tennis.count_point()).toBe("fourty - fourty")
              });

            it('should "Player B won"', function() {

                    var tennis = new Tennis()

                    tennis.put_point('p2')
                    tennis.put_point('p2')
                    tennis.put_point('p2')
                    tennis.put_point('p2')

                  expect(tennis.count_point()).toBe("Player B won")
             });
             it('should "Player A won"', function() {

                     var tennis = new Tennis()

                     tennis.put_point('p1')
                     tennis.put_point('p1')
                     tennis.put_point('p1')
                     tennis.put_point('p1')

                   expect(tennis.count_point()).toBe("Player A won")
              });


});
