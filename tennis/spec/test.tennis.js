
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




});
