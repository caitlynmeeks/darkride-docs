// A JSDoc plugin: the engine's tags for the kinds of script that can use a namespace or class (MIT, Darkride docs).
const tags = {
  'hifi-interface': 'interface',
  'hifi-client-entity': 'clientEntity',
  'hifi-avatar': 'avatar',
  'hifi-server-entity': 'serverEntity',
  'hifi-assignment-client': 'assignmentClient',
}

exports.defineTags = (dictionary) => {
  for (const [tag, kind] of Object.entries(tags)) {
    dictionary.defineTag(tag, {
      onTagged: (doclet) => {
        doclet.scriptTypes = doclet.scriptTypes || []
        if (!doclet.scriptTypes.includes(kind)) doclet.scriptTypes.push(kind)
      },
    })
  }
}
