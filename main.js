/**
 * https://www.investopedia.com/terms/d/dividendyield.asp#:~:text=than%2Daverage%20yield.-,Calculating,-the%20Dividend%20Yield
 * @param {*} annual_dividend 
 * @param {*} price 
 * @returns 
 */
const dividendYield = (annual_dividend, price) => annual_dividend / price

/**
 * 
 * @param {*} dividends_paid 
 * @param {*} outstanding_shares 
 * @returns 
 */
const annualDividend = (dividends_paid, outstanding_shares) => dividends_paid / outstanding_shares

/**
 * 
 * @param {*} total_liabilities 
 * @param {*} total_sharehold_equity 
 * @returns 
 */
const debtToEquity = (total_liabilities, total_sharehold_equity) => total_liabilities / total_sharehold_equity

/**
 * https://www.investopedia.com/terms/p/payoutratio.asp
 * @param {*} dividends_paid 
 * @param {*} net_income 
 * @returns 
 */
const payoutRatio = (dividends_paid, net_income) => dividends_paid / net_income

/**
 * 
 * @param {*} net_income 
 * @param {*} revenue 
 * @returns 
 */
const netProfitMargin = (net_income, revenue) => (net_income / revenue) * 100

module.exports = {dividendYield, annualDividend, debtToEquity, payoutRatio, netProfitMargin}