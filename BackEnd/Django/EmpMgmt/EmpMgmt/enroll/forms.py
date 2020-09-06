from django.core import validators
from django import forms
from .models import User

class EmployeeRegistration(forms.ModelForm):
    class Meta:
        model = User
        fields = ['name', 'email', 'position']
        widgets = {
            'name': forms.TextInput(attrs={'class':'form-control'}),
            'email': forms.EmailInput(attrs={'class':'form-control'}),
            'position': forms.TextInput(attrs={'class':'form-control'})
            ,
        }

