describe('pigLatin', function() {

  it('will add ay to the end of a word starting with a vowel', function() {
    expect(pigLatin('animal')).to.equal('animalay');
  });

  it('will remove the first consanant and at it to the end along with ay', function() {
    expect(pigLatin('dog')).to.equal('ogday');
  });

  it('will remove the first two consanants and add them to the end with ay', function() {
    expect(pigLatin('spatula')).to.equal('atulaspay');
  });
});
