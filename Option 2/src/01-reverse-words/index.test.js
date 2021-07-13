const reverseWordsInSentence = require('.');

describe('reverseWordsInSentence', () => {
  it('Given a string, reverses each word in the sentence', () => {
    expect(
      reverseWordsInSentence('Reach PLC is the largest publisher in the UK!'),
    ).toEqual('hcaeR CLP si eht tsegral rehsilbup ni eht !KU');

    expect(reverseWordsInSentence('javascript is an awesome language')).toEqual(
      'tpircsavaj si na emosewa egaugnal',
    );
  });
});
