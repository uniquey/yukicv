# this is for both server and client sides
Router.configure  
    # layoutTemplate: 'layout'
    # loadingTemplate: 'loading'

Router.onBeforeAction 'loading' # show loading template while waiting for the action

Router.map -> 
  @route 'home', path:'/'
  @route 'egt'
  @route 'epe'
  @route 'epc'
  @route 'ecm'
  @route 'ehome'
  @route 'gt'
  @route 'pe'
  @route 'pc'
  @route 'cm'
  @route 'print'
