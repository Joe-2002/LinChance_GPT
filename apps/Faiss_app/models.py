from django.db.models import *

# Create your models here.

class Faiss_data(Model):
    text_name = CharField(null=False,blank=True, max_length=256,verbose_name='文件名',)
    text = FileField(null=True, blank=True,upload_to='FAISS_Data',verbose_name='txt文件')
    categories = CharField(max_length=128, verbose_name='分类', null=True, blank=True)