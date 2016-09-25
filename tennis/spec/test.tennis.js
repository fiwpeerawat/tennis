
function Tennis(){
  this.point_player1 =0 ;
  this.point_player1 =0 ;

  
}




describe("count-point", function() {
  it('should "Love - Love"', function() {
    var tennis = new Tennis()

    expect(tennis.count_point(0,0)).toBe("love - love")
  });
});
