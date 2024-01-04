from django import template

register= template.Library()
@register.filter(name='cut')

def cut(value,arg):
    """"
    this cut out all value of "arg" from the string
    """
    return value.replace(arg,'')

