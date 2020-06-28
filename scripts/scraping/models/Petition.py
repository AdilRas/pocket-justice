class Petition:

    def __init__(self, title, href, signatures="0", goal="0", description="No description", imageHref=""):
        self.title = title.replace('"', '\'')
        self.href = href.replace('"', '\'')
        self.description = description.replace('"', '\'')
        self.goal = goal.replace('"', '\'')
        self.signatures = signatures.replace('"', '\'')
        self.imageHref = imageHref.replace('"', '\'')
    
    def toString(self):
        """ toString meant for testing purposes"""
        out = ["["]
        out.append(self.title)
        out.append(self.href)
        out.append(self.description)
        out.append(self.signatures)
        out.append(self.goal)
        out.append("]")
        return "\n\t".join(out)

    def toJsonString(self):
        return f'{{"title": "{self.title}", "description": "{self.description}", "href": "{self.href}", "imageHref": "{self.imageHref}", "signatures": "{self.signatures}", "goal": "{self.goal}"}}'
