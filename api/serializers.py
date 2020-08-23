from rest_framework import serializers
from .models import Campaign, Keywords, Subscribers

class CampaignSerializer(serializers.ModelSerializer):
	# name = serializers.SerializerMethodField()

	class Meta:
		model = Campaign
		fields = '__all__'


class KeywordsSerializer(serializers.ModelSerializer):

	class Meta:
		model = Keywords
		fields = '__all__'

class SubscribersSerializer(serializers.ModelSerializer):
    
	class Meta:
		model = Subscribers
		fields = '__all__'