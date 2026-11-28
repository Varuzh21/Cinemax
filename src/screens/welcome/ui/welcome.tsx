import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import { FONT_FAMILY } from '@/shared/config/fonts';
import { Colors, FontWeights } from '@/shared/config/theme';
import {
	AppleLogo,
	CinemaxLogo,
	FacebookLogo,
	GoogleLogo,
} from '@/shared/icon';
import { Button } from '@/shared/ui/button';
import { ThemedView } from '@/shared/ui/themed-view';
import { Wrapper } from '@/shared/ui/wrapper';

import { SocialButton } from './social-button';

export function Welcome() {
	return (
		<ThemedView style={styles.screen}>
			<Wrapper style={styles.content}>
				<View style={styles.header}>
					<CinemaxLogo />
					<View style={styles.titleGroup}>
						<Text style={styles.title}>CINEMAX</Text>
						<Text style={styles.subtitle}>
							Enter your registered{'\n'}Phone Number to Sign Up
						</Text>
					</View>
				</View>

				<View style={styles.actions}>
					<View style={styles.primaryActions}>
						<Button title='Sign Up' />
						<Text style={styles.loginText}>
							I already have an account?{' '}
							<Link style={styles.loginLink} href='/sign-in'>
								Login
							</Link>
						</Text>
					</View>

					<View style={styles.socialSection}>
						<View style={styles.divider}>
							<View style={styles.dividerLine} />
							<Text style={styles.dividerText}>Or Sign up with</Text>
							<View style={styles.dividerLine} />
						</View>

						<View style={styles.socialButtons}>
							<SocialButton
								accessibilityLabel='Sign up with Google'
								backgroundColor={Colors.text.white_grey}
								icon={<GoogleLogo />}
							/>
							<SocialButton
								accessibilityLabel='Sign up with Apple'
								backgroundColor={Colors.primary.soft}
								icon={<AppleLogo />}
							/>
							<SocialButton
								accessibilityLabel='Sign up with Facebook'
								backgroundColor='#4267B2'
								icon={<FacebookLogo />}
							/>
						</View>
					</View>
				</View>
			</Wrapper>
		</ThemedView>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: Colors.text.black,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		gap: 64,
	},
	header: {
		alignItems: 'center',
		gap: 24,
	},
	titleGroup: {
		alignItems: 'center',
		gap: 8,
	},
	title: {
		fontFamily: FONT_FAMILY,
		fontWeight: FontWeights.semiBold,
		fontSize: 28,
		color: Colors.text.white,
	},
	subtitle: {
		fontFamily: FONT_FAMILY,
		fontWeight: FontWeights.semiBold,
		fontSize: 14,
		lineHeight: 17,
		color: Colors.text.grey,
		textAlign: 'center',
	},
	actions: {
		gap: 48,
	},
	primaryActions: {
		gap: 36,
	},
	loginText: {
		fontFamily: FONT_FAMILY,
		fontWeight: FontWeights.medium,
		fontSize: 14,
		color: Colors.text.grey,
		textAlign: 'center',
	},
	loginLink: {
		fontWeight: FontWeights.semiBold,
		color: Colors.primary.blue,
	},
	socialSection: {
		gap: 40,
	},
	divider: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 16,
	},
	dividerLine: {
		width: 100,
		height: 1,
		backgroundColor: Colors.primary.soft,
	},
	dividerText: {
		fontFamily: FONT_FAMILY,
		fontWeight: FontWeights.medium,
		fontSize: 14,
		color: Colors.text.grey,
	},
	socialButtons: {
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 24,
	},
});
