class Petition:

    def __init__(self, title, href, signatures, goal, description):
        self.title = title
        self.href = href
        self.description = description
        self.goal = goal
        self.signatures = signatures
    
    """ toString meant for testing purposes"""
    def toString(self):
        out = ["["]
        out.append(self.title)
        out.append(self.href)
        out.append(self.description)
        out.append(self.signatures)
        out.append(self.goal)
        out.append("]")
        return "\n\t".join(out)
