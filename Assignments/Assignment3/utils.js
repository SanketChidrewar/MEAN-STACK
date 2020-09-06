function createResult(error, dbResult) {

    const result = { status: '' }
    if (error) {
      // error while performing the statement
      console.table(error)
      result['status'] = 'error'
      result['error'] = error
    } else {
      // execution went successfull
      console.table(dbResult)
      result['status'] = 'success'
      result['data'] = dbResult
    }
  
    return result

}

module.exports = {
    createResult: createResult
  }