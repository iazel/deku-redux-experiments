import { isThunk } from 'deku/lib/element'

export default function override(key, ofunc, vnode)
{
  if( isThunk(vnode) )
  {
    if(vnode.override === undefined)
      vnode.override = {}

    vnode.override[key] = ofunc
  }

  return vnode
}
