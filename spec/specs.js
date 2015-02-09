describe('pigLatin', function() {

  it('will add ay to the end of a word starting with a vowel', function() {
    expect(pigLatin('animal')).to.equal('animalay');
  });
});
