const expect = require('chai').expect
const unitHarmonizer = require('../index')

describe('react-set-default-unit', () => {
  describe('With a unitless string', () => {
    it('should return the string + the given default unit', () => {
      expect(unitHarmonizer('20', 'px')).to.eql('20px')
    })
  })

  describe('With a string with a unit', () => {
    it('should return the same string', () => {
      expect(unitHarmonizer('20em', 'px')).to.eql('20em')
    })
  })

  describe('With a string with multiple unit', () => {
    it('should add default unit when needed', () => {
      expect(unitHarmonizer('20em 20 0 0em', 'px')).to.eql('20em 20px 0px 0em')
    })
  })
})
