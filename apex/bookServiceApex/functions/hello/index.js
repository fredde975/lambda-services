console.log('starting function')
exports.handle = function(e, ctx, cb) {
  console.log('processing event: %j', e)
  console.log('processing...more development...again...4', e)
  cb(null, { hello: 'world2 from opkoko' })
}
